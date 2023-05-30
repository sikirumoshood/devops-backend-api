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

                dir('/home/checkouts'){
                    checkout scm

                    withCredentials([gitUsernamePassword(credentialsId: '93f07d36-e295-45b2-b015-840a32c40ab8')]) {
                        sh 'git stash && git pull origin ${env.BRANCH_NAME}'
                        sh 'npm i'
                    }

                    publishChecks name: 'Install dependencies', title: 'Install dependencies', summary: 'Dependencies intalled successfully',
        text: 'you can publish checks in pipeline script'

                }
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building code'

                dir('/home/checkouts/devops-backend-api'){
                    sh 'npm start'
                    publishChecks name: 'Build', title: 'Build', summary: 'Project built successfully',
        text: 'you can publish checks in pipeline script'

                }
            }
            
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            
            steps {
                    echo 'Deploying code'publishChecks name: 'Deploy code', title: 'Deploy code', summary: 'Code deployed successfully',
        text: 'you can publish checks in pipeline script'
                    // Resta
                    // rt PM 2 app
              
            }
        }

        
    }
}
