pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Build Backend') {
      steps {
        sh '''
          npm install
          npm run build || true
        '''
      }
    }
  }

  post {
    success {
      build job: 'AUTOTEST-JOB',
        parameters: [
          booleanParam(name: 'ALLOW_RUN', value: true)
        ]
    }
  }
}
