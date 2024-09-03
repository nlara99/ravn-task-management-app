## Ravn Frontend Code Challenge  (.R)
______________________________________________________

Welcome to task management project! In this 🗒️README file you will find all the relevant information about the project, including the structure, the technologies used and other important details.

Index
- [🥅 Goals achieved](#-goals-achieved)
- [👣 First Steps](#-first-steps)
  - [📖 System Requirements (Development)](#-system-requirements-development)
  - [⚙️Setup](#️setup)
- [⚒️Project](#️project)
  - [🏗️Directory Structure](#️directory-structure)
  - [🎛️ Environment Variables](#️-environment-variables)
  - [🚀 Building the Application](#-building-the-application)

# 🥅 Goals achieved
- Initial setup  ✅
- Create the dashboard UI ✅
- Tasks query ✅
- Create task mutation 🏗️
- Update and Delete task mutation🏗️
- Filter tasks🏗️
- Show the user information🏗️
- Bonus points🏗️

The objectives I achieved are aligned with my availability, given my work-related commitments. Due to time constraints, some points were not addressed. Each goal is documented with merge commits, which were features that, once completed, were merged into the develop branch. I used GitFlow for this project.


# 👣 First Steps

## 📖 System Requirements (Development)
Make sure your system meets the following requirements before running the application:

- **🧩Node: 18.20.4** 
  [https://nodejs.org/download/release/v18.20.4/](https://nodejs.org/download/release/v18.20.4/)
- **🅰️Angular 15.1.6** 
  `npm install -g @angular/cli@15.1.0`
- **💉 Dependencies**: The dependencies mentioned in the package.json file

## ⚙️Setup
Follow these steps to set up the project in your local environment:

1. Clone the project repository from the repository URL.
2. Make sure you have everything needed installed on your machine. You can verify this by running the following command in the terminal:

```
ng version
```
If installed correctly, it should return a response similar to the following:

    [√] Angular CLI:  15.1.6
    [√] Node: 18.20.4
    [√] Package Manager: pm 10.6.0
    [√] OS: win32 x64

    Angular:
    ...
    Package                      Version

    @angular-devkit/architect    0.1501.0 (cli-only)
    @angular-devkit/core         15.1.6 (cli-only)
    @angular-devkit/schematics   15.1.6 (cli-only)
    @schematics/angular          15.1.6 (cli-only)

Install all necessary dependencies and plugins by running the following command at the root of the project:
```
npm install
```
Run the application using the following command:
```
ng serve -o
```
Enjoy the application!

# ⚒️Project

## 🏗️Directory Structure

 * &#x1f4c1; `src/`: Source code plus style resources
   * &#x1F4C4; `main.ts`: The main entry point of the Angular application.
   * &#x1f4c1; `app/`: This directory contains all the application's source code
     * &#x1F4C4; `app.module.ts`: The main application module, which initializes and configures the app.
     * &#x1f4c1; `modules/`: This directory contains the different modules of the application. Each module represents a specific functional part or feature of the app. Within each module, a structure similar to that of the main project is followed.
     * &#x1f4c1; `core/` Here you will find the models, interfaces, endpoints, dtos, guards, interceptors, util & store of the application using ngRx.
    * &#x1f4c1; `assets/`: This directory contains all the icons, images, and environment configurations

The project structure is designed to maintain clear and modular organization, facilitating the maintenance and expansion of the application. The modules allow for functionality to be separated into independent units, and the global and local components ensure efficient code reuse.

## 🎛️ Environment Variables

In the file `src/assets/env.ts`, you will find the environment variables used in the application. Here is a brief explanation of each property:

   * `apiToken`: This variable stores the authentication token required for Backend API.
   * `apiBase`: This variable defines the base URL for the Backend API.
  

## 🚀 Building the Application

Once you have properly configured your development environment and are ready to deploy your application, follow these steps to build the Angular application:

1. **Run the build command🏗️:**
   
   At the root of the project, run the following command in your terminal to build the Angular application:

    ```
    ng build
    ```

    This command will compile and build the Angular application for production. During this process, a `dist/` folder will be generated at the root of the project, containing the compiled files ready to be deployed to a web server.

2. **Verify the build👷:**
    Once the build completes successfully, ensure there are no errors in the command output. The `dist/` folder should contain all the necessary files for your Angular application, ready to be deployed.

3. **Deploy the application 👩‍🚀:**

    Use the files generated in the `dist/` folder to deploy your Angular application to your preferred web server or hosting platform. You can use tools like FTP, Git, or automated deployment platforms to upload the files to the server. 🚀

4. **Upload these files to your web server  ☁️:**

    Make sure to correctly configure your web server to serve the static files from the `dist/` folder and set up the routes as needed for your Angular application.

    With these steps, you will have built your Angular application and it will be ready to be deployed to production! 🚀




