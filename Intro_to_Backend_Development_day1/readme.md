# Intro to Backend Development

## What is Backend ?
```
Backend Development refers to the server-side development of the web application. It is the part of the application where the server and database reside and the logics is build to perform operations. It includes the main features and functionalities of the application on the server. Programming languages for the backend are mainly Node. JS (for JavaScript), Django (for Python), Spring (Java), etc.
```

## Backend Development Roadmap

- Knowledge of Web Server
- Programming Languages and Their Frameworks
- Version Control System (Git)
- Knowledge of Web Security 
- APIs  (Application Programming Interface)
- Containerization & Testing
- Deployment
- Cloud Providers


## Knowledge of Web Server
```
The web server runs websites, it stores, processes, and delivers (response) web pages to the user’s request. When the user makes a request by the web server, it is accepted by an HTTP server which finds and sends back the content to the browser through HTTP. Some examples of web servers are Apache and NGINX which are open-source platforms used to deliver content as per requests made. 
```

## Programming Languages and their Framework
```
1. JS(NodeJS) - With JavaScript being the most demanding programming language, you can explore various new concepts and build a very amazing website. It is used to build interactive and dynamic websites. For JS, we have a framework which is NodeJS, which is designed with real-time, push-based architectures, the single-threaded model used for backend API services. NodeJS allows you to run JavaScript on the server. 

2. Python (Django) - Python is the easiest of all programming languages and with Django, it plays a perfect combination to build a website. With less code, you can build better and more easy web applications. Python is most commonly used for developing websites and it performs quicker implementations. Django is the most secure and scalable framework one should work with. 

3. Java (Spring boot) - Java is a versatile, object-oriented programming language widely used for building robust, scalable applications. Known for its portability across platforms, Java powers enterprise-level applications, mobile apps, web services, and more.

Spring Boot is a powerful framework for building Java-based web applications. It simplifies the development process by providing pre-configured templates, embedded servers, and a wide range of tools to create production-ready applications quickly. With features like dependency injection, auto-configuration, and seamless integration with various databases and services, Spring Boot enhances developer productivity and ensures robust, maintainable code.
```

## Version Control System (Git)
```
Version control system helps in maintaining and tracking changes in code changes to be used for future implementations. They are software tools that help in managing changes in source code over time. Git which is free and open-source can be the best choice as a version control system because of its secure, flexible, and easy-to-edit features.

Why Git? 

It is the most commonly used version control system
It tracks changes made in files.
Git branches are cheap and easy to merge.
You can move to specific versions whenever you want to.
```

## Knowledge of Web Security
```
Various threats can attack a website which could result in its poor performance. Web security refers to the protective measures and protocols developers should follow to build an optimized and effective website. It includes scanning a website for vulnerabilities to defend against thefts or loss that occurs due to digital hackers.

Types of Risks developers face could be malware, backlisting, buffer overflow, and sensitive data exposure. Various techniques can be followed to avoid such issues:

Using HTTPS: HTTPS is a secured HTTP. When data is sent using HTTPS, it is protected via the Transport Layer Security protocol, which has three layers of protection:

Encryption: Way of securing data along with a password or “key” which is used to decrypt the information.
Data Integrity: When data integrity is secure, information stored in a database is complete, accurate, and reliable for a lifetime.
Authentication: This method protects against attacks and builds user trust which response to business growth.
Implementing secure backup and recovery: Data loss could be the major threat that could lead to security breaches. To avoid this, make sure to implement a backup process. This could be implemented in many ways: 

Protecting media and content from theft or destruction.
Periodically testing the backups.
Apply a two-person rule so that one person cannot access the content or media without the permission of another article.
and various other methods include XSS Attacks, Software updates, and SQL Injection. 
```

## APIs (Application Programming Interface)
```
An API (Application Programming Interface) is a set of functions that perform accessing data and interacting with external software components, microservices, and OS. In short, it delivers users’ responses to the system and sends responses back to the user. It is because of APIs (which act as a software intermediary) that two applications talk to each other. APIs are used by backend developers to create connections between services or applications to initiate communication to improve user experience. Express is a good choice for a server to create and expose APIs to have client-server communication. Some of the APIs you should know about are:

REST (Representational State Transfer) API:

Explanation: REST APIs use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations. They are stateless and use standard HTTP methods (GET, POST, PUT, DELETE).
Example: A GET request to https://api.example.com/users retrieves a list of users.


SOAP (Simple Object Access Protocol) API:

Explanation: SOAP APIs use XML-based messaging protocol for exchanging information. They are more rigid and require strict adherence to standards.
Example: A SOAP request to https://api.example.com/soap/users to retrieve user information would involve an XML envelope with a specific structure.


GraphQL API:

Explanation: GraphQL allows clients to request exactly the data they need, making it more efficient than REST. It uses a single endpoint and allows for complex queries.
Example: A query like { user(id: "1") { name, email } } to https://api.example.com/graphql retrieves only the name and email of the user with ID 1.

WebSocket API:

Explanation: WebSocket APIs enable real-time, bidirectional communication between a client and a server over a single, long-lived connection.
Example: A chat application where messages are sent and received in real-time using WebSocket connections to wss://chat.example.com.

RPC (Remote Procedure Call) API:

Explanation: RPC APIs allow clients to execute code on a server as if it were a local procedure call, using protocols like JSON-RPC or XML-RPC.
Example: A JSON-RPC call to https://api.example.com/rpc to execute a method like {"jsonrpc": "2.0", "method": "getUser", "params": {"id": 1}, "id": 1}.

OpenAPI (formerly Swagger):

Explanation: OpenAPI is a specification for building APIs that includes a standard way to describe APIs using a common language, allowing for easy documentation and client generation.
Example: A documented REST API using OpenAPI can be explored via a URL like https://api.example.com/docs.

```

## Containerization & Testing
```
Containerization is the process of packaging software code with all the necessary elements like frameworks, libraries, and other dependencies, to make services isolated from each other in a container. This process is done by the backend developers to run a container easily. Docker and Kubernetes are the most used containers.  

Docker is an open-source containerization platform, that enables developers to package applications into containers. It is similar to a virtual machine but much more efficient. Its basic use of it is it allows the applications to run in different environments.

Kubernetes often abbreviated as “K8s”, automates deploying and managing cloud-native applications using public cloud platforms. 
```

## Deployment
```
Deployment

When the testing passes, developers move to the deployment where they can see the working of their application. It can also be referred to as a live environment. This process includes 5 steps: Planning, development, testing, deploying, and monitoring. 

Planning: When multiple developers are working on the same project, a deployment plan is a necessity. Using this step, you avoid conflicts between changes made making sure the deployment process is as smooth and easy. This could lead to the quicker and more efficient development of the application.

Development: Once, the planning is done, actual development takes place. This is the step where you gather ideas and prioritization requirements. Then, the management of the complete application can be moved to testing.

Testing: Testing is a crucial step to ensure there are no bugs before moving it to the production level. Testing is possible only when you deploy it to various environments to check whether it fits in or not. Check for the bugs and if any, make sure to remove them and then move to the deployment process.

Deploying: Seeing your application working live, with no bugs, and in an optimized way gives satisfaction to the effort made. It means pushing changes or updates from one environment to another.

Monitoring: Constant monitoring is required to check whether the website is working well or not. There might be a chance that issues may occur after deploying as well, so keep an eye out for the proper functioning, and the time for release should be planned so that minimum users would have viewed and changes can be made to see the optimized web application.
```

## Cloud Providers
```
Cloud Providers
Everything is making its way to the cloud, be it software, applications, services, or products. Cloud computing. It is Web-based computing that permits businesses and individuals to consume computing resources such as virtual machines, databases, processing, services, storage, and events, and gives you a pay-as-you-go service. Cloud computing can be divided into three major categories, Software as a Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS).

The most used Cloud Services are:

Amazon Web Services (AWS)
Microsoft Azure
Google Cloud
Alibaba Cloud
IBM Cloud
& more...
```

## Backend Development Frameworks / Technologies

- Laravel: Laravel is a PHP framework for web applications, created by Taylor Otwell in 2011. It follows the Model-View-Controller (MVC) architectural pattern.

- Node JS: Node JS is an open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser.

- Django: Django is a Python-based web framework that allows you to quickly create efficient web applications. It provides built-in features for everything including Django Admin Interface, default database – SQLlite3, etc. 

- Spring Boot: Spring Boot is a Java framework that makes it easier to create and run Java applications. It simplifies the configuration and setup process, allowing developers to focus more on writing code for their applications.

- Flask: Flask is an API of Python that allows us to build up web-applications. It was developed by Armin Ronacher. Flask is based on WSGI(Web Server Gateway Interface) toolkit and Jinja2 template engine.

- Express: Flask is an API of Python that allows us to build up web-applications. It was developed by Armin Ronacher. Flask is based on WSGI(Web Server Gateway Interface) toolkit and Jinja2 template engine.

- Ruby on Rails: Ruby on Rails or also known as rails is a server-side web application development framework that is written in the Ruby programming language, and it is developed by David Heinemeier Hansson under the MIT License. It supports MVC architecture.


## Benefits of Back-End Development

- Data Management: Backend handles data storage, retrieval, and management in databases. This ensures organized and efficient handling of large volumes of data.

- Business Logic: Backend is responsible for implementing the business logic of an application. It processes data, performs calculations, and enforces business rules to ensure proper application functionality.

- Server-Side Processing: Backend code runs on the server, allowing for server-side processing. This reduces the load on the client’s device and enhances the overall performance of the application.

- API Development: Backend is responsible for creating APIs (Application Programming Interfaces) that allow communication between different components of a system. APIs enable integration with third-party services and ensure a seamless user experience.

- Scalability: Backend architecture plays a key role in the scalability of an application. Well-designed backend systems can easily scale to handle increased loads and user traffic.

- Database Management: Backend developers design and manage databases, ensuring efficient data storage, retrieval, and maintenance. This is critical for applications that deal with a large amount of dynamic content.

- Support for Multiple Platforms: Backend logic ensures consistency and compatibility across various platforms and devices. This allows users to access the application from different devices without compromising the user experience.

- Updates and Maintenance: Backend development facilitates easier updates and maintenance of applications. Changes to the application logic can be implemented on the server without requiring updates to individual client devices.

- Optimization: Backend developers optimize code and databases to improve application performance. This includes optimizing queries, implementing caching strategies, and reducing response times.

- Data Validation: Backend is responsible for validating data before it is stored in the database. This ensures data integrity and prevents the storage of incorrect or inconsistent data.

- Consistent User Experience: Backend development contributes to a consistent user experience by ensuring that all users, regardless of the device or platform they are using, receive the same data and functionality.

- Compliance and Regulations: Backend developers implement features and processes to ensure that applications comply with legal regulations and industry standards, such as data protection laws.

## Backend Projects
```
Contact Form
Social Media REST API
File Uploader
Portfolio App
Real-Time Chat
Job Search App
Task Manager
Email Sender

etc...

```

----

