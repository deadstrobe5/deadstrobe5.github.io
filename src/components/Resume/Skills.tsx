'use client';

import React from 'react';

import type { Category, Skill } from '@/data/resume/skills';

import SkillBar from './Skills/SkillBar';

interface SkillsProps {
  skills: Skill[];
  categories: Category[];
}

const Skills: React.FC<SkillsProps> = ({ skills, categories }) => {
  const getSkillsByLevel = () => {
    const skillsByLevel: { [key: number]: Skill[] } = {};

    // Group skills by competency level
    skills.forEach((skill) => {
      if (!skillsByLevel[skill.competency]) {
        skillsByLevel[skill.competency] = [];
      }
      skillsByLevel[skill.competency].push(skill);
    });

    // Sort skills within each level alphabetically
    Object.keys(skillsByLevel).forEach((level) => {
      skillsByLevel[Number(level)].sort((a, b) => a.title.localeCompare(b.title));
    });

    return skillsByLevel;
  };

  const getLevelLabel = (level: number) => {
    switch (level) {
      case 5:
        return 'Expert';
      case 4:
        return 'Advanced';
      case 3:
        return 'Intermediate';
      case 2:
        return 'Beginner';
      case 1:
        return 'Novice';
      default:
        return 'Unknown';
    }
  };

  const renderSkillGroups = () => {
    const skillsByLevel = getSkillsByLevel();

    return [5, 4, 3, 2, 1]
      .map((level) => {
        const levelSkills = skillsByLevel[level];
        if (!levelSkills || levelSkills.length === 0) return null;

        return (
          <div key={level} className="skill-level-group">
            <h4 className="skill-level-title">
              {getLevelLabel(level)} ({levelSkills.length})
            </h4>
            <div className="skill-level-container">
              {levelSkills.map((skill) => (
                <SkillBar categories={categories} data={skill} key={skill.title} />
              ))}
            </div>
          </div>
        );
      })
      .filter(Boolean);
  };

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>Skills</h3>
        <p>
          Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly*
          honest overview of my skills.
        </p>
      </div>
      <div className="skills-grouped-container">{renderSkillGroups()}</div>
    </div>
  );
};

export default Skills;
