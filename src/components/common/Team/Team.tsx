import TeamMember from "./TeamMember";

interface TeamMember {
  id: string;
  name: string;
  imagePath: string;
  bio: string;
}

interface TeamProps {
  team: TeamMember[];
}

export default function Team({ team }: TeamProps) {
  return (
    <div className="row g-5">
      {team.map((teamMember) => (
        <div key={teamMember.id} className="col-md-6 col-lg-4 col-xl-3">
          <TeamMember {...teamMember} />
        </div>
      ))}
    </div>
  );
}