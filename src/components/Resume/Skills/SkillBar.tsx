import React from 'react';

import type { Category, Skill } from '@/data/resume/skills';

interface SkillBarProps {
  data: Skill;
  categories: Category[];
}

const SkillBar: React.FC<SkillBarProps> = ({ data, categories }) => {
  const { category, competency, title } = data;

  // Color based on competency level
  const getCompetencyColor = (level: number) => {
    switch (level) {
      case 5:
        return '#4CAF50'; // Expert - Green
      case 4:
        return '#2196F3'; // Advanced - Blue
      case 3:
        return '#FF9800'; // Intermediate - Orange
      case 2:
        return '#FF5722'; // Beginner - Red-Orange
      case 1:
        return '#9E9E9E'; // Novice - Gray
      default:
        return '#9E9E9E';
    }
  };

  const competencyColor = getCompetencyColor(competency);

  const backgroundStyle = {
    width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
  };

  const badgeStyle = {
    backgroundColor: competencyColor,
  };

  // Create rating dots (1-5 scale)
  const ratingDots = Array.from({ length: 5 }, (_, index) => (
    <div key={index} className={`skill-rating-dot ${index < competency ? 'filled' : ''}`} />
  ));

  return (
    <div className="skill-compact">
      <div className="skill-compact-background" style={backgroundStyle} />
      <div className="skill-compact-content">
        <div className="skill-compact-title">{title}</div>
        <div className="skill-compact-badge" style={badgeStyle} />
        <div className="skill-compact-rating">{ratingDots}</div>
      </div>
    </div>
  );
};

export default SkillBar;
