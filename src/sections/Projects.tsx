import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";
import type { Project } from "../constants";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);





    return (
        <>
            <section id="projects" className="px-5 md:px-10 py-20 mt-40">
                <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
                    <TitleHeader
                        title="Featured Projects"
                        sub="🚀 Showcasing my latest work✨"
                    />

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 6).map((project) => (
                            <div
                                key={project.id}
                                className="card-border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/images/bg.png';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.slice(0, 3).map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-royal/80 text-white text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Projects Button */}
                    <div className="mt-12 text-center ">
                        <a href="/projects" className="inline-block">
                            <div className="cta-button group w-60">
                                <div className="bg-circle" />
                                <p className="text">All Projects</p>
                                <div className="arrow-wrapper">
                                    <img src="/images/arrow-down.svg" alt="arrow" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Project Details Modal - Rendered using Portal */}
            {selectedProject && createPortal(
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem',
                        zIndex: 999999,
                        margin: 0
                    }}
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="card-border rounded-xl p-8 w-full relative"
                        style={{
                            maxWidth: '32rem',
                            maxHeight: '80vh',
                            overflowY: 'auto',
                            margin: 'auto'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
                            aria-label="Close modal"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 pr-12">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-white-50 leading-relaxed">
                                    {selectedProject.description}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-royal text-white text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 pt-6">
                                {selectedProject.liveUrl && (
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <div className="cta-button group">
                                            <div className="bg-circle" />
                                            <p className="text">View Live</p>
                                            <div className="arrow-wrapper">
                                                <img src="/images/arrow-down.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </a>
                                )}

                                {selectedProject.githubUrl && (
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <div className="cta-button group">
                                            <div className="bg-circle" />
                                            <p className="text">View Code</p>
                                            <div className="arrow-wrapper">
                                                <img src="/images/arrow-down.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default Projects;