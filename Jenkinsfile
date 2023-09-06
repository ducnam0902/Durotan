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
                def scannerHome = tool 'SonarScanner'
                withSonarQubeEnv() {
                    sh "${scannerHome}/bin/sonar-scanner"
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
