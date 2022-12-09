pipeline {
  agent any
  stages {
    stage('Git Checkout') {
      steps {
        git(url: 'https://github.com/fernandocorrea256/mypersonalwebsite/', branch: 'jenkins')
      }
    }

    stage('Hello World') {
      steps {
        echo 'Hello World'
      }
    }

  }
}