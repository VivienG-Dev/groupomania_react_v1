import React from "react";
import StoryCard from "../components/StoryCard";

// TEMPORAIRE: en attendant d'avoir la base de donnée...
const stories = [
  {
    name: "VivienG",
    src: "/../public/elon_musk_reuters.jpg",
    profile: "/../public/Elon_Musk_Royal.jpg",
  },
  {
    name: "Saynavia",
    src: "/../public/elon_musk_reuters.jpg",
    profile: "/../public/Elon_Musk_Royal.jpg",
  },
  {
    name: "Louloute",
    src: "/../public/elon_musk_reuters.jpg",
    profile: "/../public/Elon_Musk_Royal.jpg",
  },
  {
    name: "Bob",
    src: "/../public/elon_musk_reuters.jpg",
    profile: "/../public/Elon_Musk_Royal.jpg",
  },
  {
    name: "Kiki3000",
    src: "/../public/elon_musk_reuters.jpg",
    profile: "/../public/Elon_Musk_Royal.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {/* On rajoute la clé "index" car nous n'avons pas d'ID défini dans const stories */}
      {stories.map((story, index) => (
        <StoryCard key={index} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
