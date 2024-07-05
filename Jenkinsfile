pipeline{
    agent {
        docker {image 'node:18-alpine'}
    }

    stages{
        stage("Checkout"){
            steps{
                checkout scm
            }
        }
        stage("Node check"){
            steps{
                sh 'node --version'
            }
        }
        stage("Build"){
            steps{
                sh 'npm run build'
            }
        }
    }
}