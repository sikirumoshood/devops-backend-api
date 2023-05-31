pipeline {
    agent any
    
    tools {nodejs "node-v16.10.0"}
    
    stages {
        
        stage('Checkout code') {
            steps {
                echo 'Prepare for checkout'

                sh 'node -v'
                sh 'npm -v'

                echo 'Checking out code'
                
                dir('/home/checkouts/devops-backend-api'){

                    withCredentials([gitUsernamePassword(credentialsId: '93f07d36-e295-45b2-b015-840a32c40ab8')]) {
                        checkout scm
                    }

                    publishChecks name: 'Checkout code', title: 'Checkout code', summary: 'Checkout successful',
        text: 'you can publish checks in pipeline script'

                }
            }
        }
        
        stage('Test') {
            steps {
                echo "Building branch ${env.GIT_BRANCH}"

                dir('/home/checkouts/devops-backend-api'){
                    sh 'git fetch --all'
                    sh "git branch -a && git checkout remotes/origin/${env.GIT_BRANCH}"
                    sh 'npm i'
                    sh 'npm test'
                    publishChecks name: 'Test', title: 'Test', summary: 'Test completed',
        text: 'you can publish checks in pipeline script'

                }
            }
            
        }

        stage('Clean up') {
            steps {
                dir('/home'){

                    echo 'Cleaning up checkout folders'
                    sh 'ls && pwd'
                    sh 'rm -rf checkouts/*'
                }

                echo 'Clean up completed successfully'
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            
            steps {
                    echo 'Deploying code'
                    publishChecks name: 'Deploy code', title: 'Deploy code', summary: 'Code deployed successfully',
        text: 'you can publish checks in pipeline script'
                    // Resta
                    // rt PM 2 app
              
            }
        }

        
    }
}
