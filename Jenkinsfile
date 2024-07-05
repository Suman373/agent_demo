pipeline{
    agent {
        docker {
            image 'node:18-alpine'
            args '-v /var/run/docker.sock:/var/run/docker.sock -v $HOME/.docker/certs:/certs'
            }
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