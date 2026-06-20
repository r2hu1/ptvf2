import { NextResponse } from "next/server";

type PinnedRepo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  primaryLanguage: { name: string } | null;
  updatedAt: string;
};

type GraphQLResponse = {
  data?: {
    user?: {
      pinnedItems?: {
        nodes: PinnedRepo[];
      };
    };
  };
  errors?: Array<{ message: string }>;
};

export async function GET() {
  const token = process.env.GITHUB_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "GitHub token not configured" },
      { status: 500 },
    );
  }

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "r2hu1") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  id
                  name
                  description
                  url
                  stargazerCount
                  primaryLanguage {
                    name
                  }
                  updatedAt
                }
              }
            }
          }
        }
      `,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "GitHub API request failed" },
      { status: res.status },
    );
  }

  const json: GraphQLResponse = await res.json();

  if (json.errors?.length) {
    return NextResponse.json(
      { error: json.errors[0].message },
      { status: 502 },
    );
  }

  const nodes = json.data?.user?.pinnedItems?.nodes;
  if (!nodes) {
    return NextResponse.json(
      { error: "Unexpected GitHub API response structure" },
      { status: 502 },
    );
  }

  const repos = nodes.map((r: PinnedRepo) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    url: r.url,
    stargazers_count: r.stargazerCount,
    language: r.primaryLanguage?.name ?? null,
    updated_at: r.updatedAt,
    clone_url: null,
  }));

  return NextResponse.json(repos);
}
