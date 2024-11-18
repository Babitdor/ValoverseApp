## NOTE : Project under development

# ValoverseApp

ValoverseApp is a mobile and web application designed for Valorant players to access and share line-up videos for various in-game abilities. Whether you're a beginner or a pro, the app provides a centralized platform to explore, learn, and contribute your own line-up strategies for different agents and maps.

The app includes features for searching line-ups by agent, map, or ability, as well as a community-driven system for sharing videos and tips.

## Features

1. Search Line-Ups by Agent & Map: Quickly find the best line-ups for any agent or map.
2. User Contributions: Upload and share your own line-up videos for the community.
3. Detailed Filters: Filter line-ups by ability type, map location, or agent.
4. Video Playback: Watch user-submitted line-up videos with in-depth explanations.
5. User Ratings & Comments: Rate and comment on line-up videos to help others find the most effective strategies.
6. Mobile and Web Support: Access the app on both mobile devices and the web platform.

## Screenshots

<div style={{align:center}}>
<img src="https://user-images.githubusercontent.com/57758789/202153977-938e5c9f-4d28-4acc-a468-a84da8ac0594.png" width="300" height="700" />
<img src="https://user-images.githubusercontent.com/57758789/202154055-d31b16d6-4f88-42b2-baff-991813fe5cd2.png" width="300" height="700" />
<img src="https://user-images.githubusercontent.com/57758789/202154083-488a3ce5-0455-4581-bcf4-fb4f05866c67.png" width="300" height="700" />
<img src="https://user-images.githubusercontent.com/57758789/202154121-c17668ae-9456-4274-ab4b-275080b51f59.png" width="300" height="700" />
</div>

## Usage
1. Search Line-Ups: Browse line-ups by agent, map, or ability. Filter videos based on your preferences.
2. Submit Line-Up Videos: Share your own line-ups with detailed explanations and tips for other players.
3. Watch and Learn: Watch user-submitted line-up videos with gameplay footage and breakdowns.
4. Rate and Comment: Provide feedback on line-ups to help the community find the best strategies.


## Contribution Guidelines
We encourage community contributions! Here's how you can contribute:

Fork the repository.
1. Clone your fork locally.
2. Create a new branch for your feature (git checkout -b feature/your-feature).
3. Make your changes and commit them (git commit -m "Add new line-up feature").
4. Push your changes to your fork (git push origin feature/your-feature).
5. Open a pull request from your fork to the main repository.

## Getting Started
### Prerequisites
To run ValoverseApp, you need the following:

1. Node.js (v16 or higher)
2. npm or yarn
3. MongoDB (for database storage, either locally or using MongoDB Atlas)
4. React Native development environment (for mobile app version)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Babitdor/ValoverseApp.git
   cd ValoverseApp
2. Install the dependencies:
  If using npm:
      ```bash
      npm install
  Or, if you prefer yarn:
  
     ```bash
     yarn install

3. Set up MongoDB (either locally or using MongoDB Atlas), then configure the database connection in the .env file.

4. Run the application locally:
For web version: 
   ```bash
   npm start
   
For mobile version (React Native):
```bash
   npx react-native run-android    # For Android
   npx react-native run-ios        # For iOS
