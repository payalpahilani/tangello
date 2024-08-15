import React from 'react';
import './SleepSupport.css';

function SleepSupport() {


    return (
        <div className="sleep-relaxation-page">

            {/* Header Section */}
            <div className="header-section">
                <h1>Sleep & Relaxation</h1>
                <p>
                    In the midst of balancing academics, social life, and extracurricular activities, it’s easy to overlook the importance of sleep and relaxation. However, quality rest is essential for your physical health, mental clarity, and emotional well-being.
                </p>
            </div>

            {/* Why Sleep and Relaxation Matter Section */}
            <div className="why-sleep-relaxation-matters">
                <h2>Why Sleep and Relaxation Matter</h2>
                <p>
                    Adequate sleep and regular relaxation are critical to your overall success and happiness. Sleep restores your body, consolidates memories, and enhances learning, while relaxation helps reduce stress, improve mood, and boost resilience.
                </p>
            </div>

            {/* Tangello Support Section */}
            <div className="tangello-support">
                <h2>Tangello is here to support you all the way</h2>
                <p>
                    You can chat with <b>TangelloAI</b>  or visit the Tangello Space to connect with other students and join interesting and dynamic activities designed just for you.
                </p>
            </div>

            {/* Sleep and Relaxation Resources Section */}
            <div className="resources-section">
                <h2>Sleep and Relaxation Resources</h2>
                <div className="resources-grid">

                    {/* Resource 1 */}
                    <div className="resource-card">
                        <h3>Establishing a Sleep Routine</h3>
                        <p>
                            Consistency is key to good sleep. We offer tips and resources to help you establish a regular sleep schedule that fits your lifestyle.
                        </p>
                    </div>

                    {/* Resource 2 */}
                    <div className="resource-card">
                        <h3>Sleep Hygiene</h3>
                        <p>
                            Good sleep hygiene involves creating habits that support restful sleep. From limiting screen time before bed to maintaining a comfortable sleep environment, our sleep hygiene guide provides practical advice to improve the quality of your sleep.
                        </p>
                    </div>

                    {/* Resource 3 */}
                    <div className="resource-card">
                        <h3>Overcoming Sleep Challenges</h3>
                        <p>
                            Many students struggle with sleep issues, whether it’s difficulty falling asleep, staying asleep, or waking up tired. GBC provides resources to help you address common sleep challenges.
                        </p>
                    </div>

                    {/* Resource 4 */}
                    <div className="resource-card">
                        <h3>Mindfulness and Meditation</h3>
                        <p>
                            Relaxation isn’t just about sleep—it’s also about finding calm during your waking hours. Discover the benefits of mindfulness and meditation as tools for reducing stress and enhancing focus.
                        </p>
                    </div>

                    {/* Resource 5 */}
                    <div className="resource-card">
                        <h3>Deep Breathing Exercises</h3>
                        <p>
                            Sometimes, a few deep breaths are all it takes to reset your mind and body. Learn deep breathing exercises that you can use anytime, anywhere to calm your nerves, reduce tension, and improve concentration.
                        </p>
                    </div>

                    {/* Resource 6 */}
                    <div className="resource-card">
                        <h3>Progressive Muscle Relaxation</h3>
                        <p>
                            Progressive muscle relaxation is a technique that involves tensing and then relaxing each muscle group in your body, helping you release physical tension and mental stress.
                        </p>
                    </div>

                    {/* Resource 7 */}
                    <div className="resource-card">
                        <h3>Relaxation Spaces on Campus</h3>
                        <p>
                            Need a quiet place to relax and unwind? Explore designated relaxation spaces on campus where you can meditate, practice yoga, or simply take a break from your busy day.
                        </p>
                    </div>

                    {/* Resource 8 */}
                    <div className="resource-card">
                        <h3>Sleep Apps and Tools</h3>
                        <p>
                            Leverage technology to improve your sleep and relaxation practices. We recommend apps that track your sleep patterns, offer guided meditation, and provide soothing sounds to help you drift off.
                        </p>
                    </div>

                    {/* Resource 9 */}
                    <div className="resource-card">
                        <h3>Workshops and Events</h3>
                        <p>
                            Join our sleep and relaxation workshops to learn more about the importance of rest and how to achieve it. These sessions cover a variety of topics.
                        </p>
                    </div>
                </div>
            </div>

            {/* Final Call to Action */}
            <div className="cta-section">
                <h2>Rest, Recharge, and Thrive</h2>
                <p>
                    By prioritizing rest, you’re investing in your ability to learn, grow, and enjoy your college experience to the fullest. Explore Tangello’s resources today and start building habits that will help you rest, recharge, and thrive.
                </p>
            </div>
        </div>
    );
}

export default SleepSupport;
