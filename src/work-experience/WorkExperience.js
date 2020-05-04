import React from "react";
import './WorkExperience.css';

const workExperiences = [
    {
        img: "data:image/png;base64,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",
        title: "Tutorfly",
        description: "As a lead instructor, I taught web development skills to a class of elementary, middle, and high school students, covering the complete process of creating a well-built, accessible website."
    },
    {
        img: "data:image/png;base64,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",
        title: "Plume",
        description: "Enabled ES6 within the operations center codebase and began the migration from Angular 1.x to Angular 8. Improved accessibility and halved NOC loading times by upgrading and integrating new chart libraries. Added dynamic CORS support to the servers, securing the company against unauthorized requests.",
        target: "https://plume.com"
    }
];

export default function () {
    return (
        <section>
            <h1 id="work-experience">Work Experience</h1>
            <div className="experiences">
                {workExperiences.map(({target, img, title, description}, i) => (
                    <a className="experience card" key={i} href={target}>
                        <div className="heading">
                            <img src={img} alt=""/>
                            <h1>{title}</h1>
                        </div>
                        <p>{description}</p>
                    </a>
                ))}
            </div>
        </section>
    )
}