import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Top workout sessions that can help you stay fit include high-intensity interval training (HIIT), which combines short bursts of intense exercise with rest periods,
        and strength training, which focuses on building muscle with weights or resistance bands.
        Yoga and Pilates are great for improving flexibility, balance, and core strength,
        while cardio workouts like running, cycling, and swimming enhance cardiovascular endurance and help burn calories.
        Mixing these sessions ensures a well-rounded fitness routine.!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Specially curated or highlighted bootcamp-style workout sessions, 
        intense group fitness classes that combine elements of cardio, strength training, and high-intensity interval training (HIIT)
        to provide a full-body workout in a short amount of time.!
        </p>
        <div className="bootcamps">
          <div>
            <h4>Variety of Workouts:</h4>
            <p>
            They may focus on different fitness goals such as weight loss, muscle building, endurance, or agility,
            and often mix different types of exercises like squats, lunges, sprints, and push-ups.!
            </p>
          </div>
          <div>
            <h4>Special Themes or Trainers:</h4>
            <p>
            Featured bootcamps often have unique themes (e.g., "Summer Shred" or "Warrior Workout")
            or are led by renowned trainers who bring a particular style or expertise.!
            </p>
          </div>
          <div>
            <h4>Time-Limited Programs:</h4>
            <p>
            They are usually time-limited, running for a few weeks or months,
            providing participants with a structured path to achieving specific fitness goals.!
            </p>
          </div>
          <div>
            <h4>High Engagement:</h4>
            <p>
            These bootcamps often encourage a community atmosphere,
            with high levels of engagement, motivation, and accountability among participants.!
            </p>
          </div>
          <div>
            <h4>Progressive Difficulty:</h4>
            <p>
            Featured bootcamps often have a progressive structure where the intensity and difficulty of workouts increase over time.
            This approach helps participants gradually build strength, endurance, and confidence, ensuring continuous improvement and preventing plateaus.!
            </p>
          </div>
          <div>
            <h4>Personalized Attention and Feedback:</h4>
            <p>
            Despite being group sessions, featured bootcamps often provide personalized attention from trainers.
            This can include individual feedback, form correction, modifications for different fitness levels, and tailored advice to help participants achieve their personal goals.!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
