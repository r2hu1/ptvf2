import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
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

  const json = await res.json();

  const repos = json.data.user.pinnedItems.nodes.map((r: any) => ({
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
