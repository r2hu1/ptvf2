import { NextResponse } from "next/server";

type ContributionDay = {
  date: string;
  contributionCount: number;
};

type Week = {
  contributionDays: ContributionDay[];
};

type GraphQLResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          weeks: Week[];
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
};

export async function GET() {
  const to = new Date();
  const from = new Date();
  from.setFullYear(to.getFullYear() - 1);

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
        query($login: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $login) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        login: "r2hu1",
        from: from.toISOString(),
        to: to.toISOString(),
      },
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

  const weeks =
    json.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
  if (!weeks) {
    return NextResponse.json(
      { error: "Unexpected GitHub API response structure" },
      { status: 502 },
    );
  }

  const data = weeks.flatMap((week: Week) =>
    week.contributionDays.map((day: ContributionDay) => ({
      date: day.date,
      value: day.contributionCount,
    })),
  );

  return NextResponse.json(data);
}
