import { useTitle } from '../hooks/useTitle.js';
import headshot from '../assets/headshot.jpeg';
import resume from '../assets/resume.pdf';

export default function About() {
    useTitle("About");
    return (
        <>
            <h1>About me</h1>
            <section className="about-container">
            <section className="bio">
                <p>
                    Hello! My name is Connor Gardiner, and I am a dedicated and passionate software engineering student with a strong foundation in both front-end and back-end technologies. I am currently a student at Centennial College, studying for an advanced diploma in software engineering technology, where I am learning JavaScript, React, Node.js, Java, C#, database concepts and various other technologies.
                </p>
                <p>
                    Throughout my academic journey, I have worked on numerous projects that have allowed me to apply my knowledge and creativity to real-world scenarios. I enjoy problem-solving and am always eager to learn new technologies and methodologies to enhance my skill set.
                </p>
                <p>
                    In addition to my technical skills, I am a strong communicator and team player. I believe that collaboration is key to successful project outcomes, and I thrive in environments where I can work alongside others to achieve common goals.
                </p>
                <p>
                    When I'm not coding, I enjoy hiking, working out, and exploring new places. These hobbies help me stay creative and inspired.
                </p>
            </section>

            <div className="about">
                <img src={headshot} className='headshot' alt='Connor Gardiner headshot' />
                <button><a href={resume} target='_blank' rel='noreferrer' className='resume-link'>Download my resume (PDF)</a></button>
            </div>
            </section>
        </>
    );
}