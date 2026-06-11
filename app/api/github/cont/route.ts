import { NextResponse } from "next/server";

export async function GET() {
  const to = new Date();
  const from = new Date();
  from.setFullYear(to.getFullYear() - 1);

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
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

  const json = await res.json();

  const data =
    json.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
      (week: any) =>
        week.contributionDays.map((day: any) => ({
          date: day.date,
          value: day.contributionCount,
        })),
    );

  return NextResponse.json(data);
}
