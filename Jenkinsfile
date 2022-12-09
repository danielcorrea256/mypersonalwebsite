pipeline {
  agent {
    docker {
      image 'node:16.18.1'
    }
  }
  stages {
    stage('Git Checkout') {
      steps {
        git(url: 'https://github.com/fernandocorrea256/mypersonalwebsite/', branch: 'jenkins')
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test -- --watchAll=false'
      }
    }

  }
}