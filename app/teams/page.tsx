"use client";

import { useState, useEffect } from "react";
import TeamMember from "@/components/TeamMember";
import { TeamMemberType } from "@/types";

const TeamsPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMemberType[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=8");
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="padding-container max-container py-24">
      <h1 className="bold-40 lg:bold-64 mb-10">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamMember key={member.login.uuid} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
