import React from "react";

const SkillList = () => {
  const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA",
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D",
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF",
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33",
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB",
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00",
    },
  ];

  return (
    <div>
      <ul className="skill-list">
        {skills.map((skill) => (
          <Skill skill={skill.skill} color={skill.color} level={skill.level} />
        ))}
      </ul>
    </div>
  );
};

function Skill({ skill, color, level }) {
  return (
    <div className="skill">
      <li className="skill" style={{ backgroundColor: color }}>
        <p>{skill}</p>

        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </li>
    </div>
  );
}

export default SkillList;
