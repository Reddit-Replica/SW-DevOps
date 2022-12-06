pipeline {
  agent any
  triggers {
    githubPush()
  }

  	environment {
		DOCKERHUB_CREDENTIALS=credentials('Dockerhub')
	}

  stages{

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

    stage('Build') {

			steps {
				sh 'docker build -t waer/web_testing:latest .'
			}
		}

    stage('Push') {
			steps {
				sh 'docker push waer/web_testing:latest'
			}
		}

}

	post {
		always {
			sh 'docker logout'
		}
	}

}