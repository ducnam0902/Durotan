pipeline {
    agent any
    tools { nodejs 'nodejs' }
    environment {
        CI = 'true'
        HOME = '.'
        npm_config_cache = 'npm-cache'
    }
    stages {
        stage('Install Packages') {
            steps {
                sh 'npm install -g yarn'
                sh 'yarn'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'sonarscan'
                    withSonarQubeEnv('sonarscan') {
                        sh "${tool('sonarscan')}/bin/sonar-scanner \
                    -Dsonar.projectKey=durotan \
                    -Dsonar.projectName=durotan"
                    }
                }
            }
        }
        stage('Test and Build') {
            parallel {
                stage('Run Tests') {
                    steps {
                        sh 'yarn coverage'
                    }
                }
                stage('Create Build Artifacts') {
                    steps {
                        sh 'yarn build'
                    }
                }
            }
        }
    }
}
