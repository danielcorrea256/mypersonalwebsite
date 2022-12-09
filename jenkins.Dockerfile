# Start from the official Jenkins image
FROM jenkins/jenkins:latest-jdk11

USER root

# Install the Docker
RUN curl -sSL https://get.docker.com/ | sh

# Add the Jenkins user to the Docker group
RUN usermod -aG docker jenkins

USER jenkins