# Component Library - React + Storybook

This project is a React Component Library built with Storybook for component visualization and Docker for containerization. Follow the instructions below to get the project up and running on `localhost:8083`.

## Prerequisites

Before running the project, make sure you have the following installed on your machine:

- **Node.js** (v18 or higher): [Download here](https://nodejs.org/en/)
- **Docker** (latest version): [Download Docker Desktop](https://www.docker.com/products/docker-desktop)
- **npm** (installed with Node.js)

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-repo-url.git
Then, navigate to the project directory:

bash
Copy code
cd abdulai_abubakar_ui_garden
2. Install Dependencies
Next, install the project dependencies by running the following command:

bash
Copy code
npm install
3. Build the Docker Image
You need to build the Docker image for the project. Use the following command:

bash
Copy code
docker build -t abdulai_abubakar_coding_assignment12 .
This will create a Docker image with the name abdulai_abubakar_coding_assignment12.

4. Run the Docker Container
Now, run the Docker container, exposing port 8083 for Storybook:

bash
Copy code
docker run -p 8083:6006 --name abdulai_abubakar_coding_assignment12 abdulai_abubakar_coding_assignment12
This command will map port 8083 on your local machine to port 6006 inside the Docker container where Storybook is served.

5. Open Storybook in the Browser
Once the Docker container is up and running, open your browser and navigate to:

arduino
Copy code
http://localhost:8083
You should now be able to view your Storybook instance and browse the components in isolation.

Additional Commands
Stop the Docker Container
If you want to stop the Docker container, run:

bash
Copy code
docker stop abdulai_abubakar_coding_assignment12
Restart the Docker Container
To restart the Docker container, use the following command:

bash
Copy code
docker start abdulai_abubakar_coding_assignment12