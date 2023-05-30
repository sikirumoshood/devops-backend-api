pipeline {
    agent any
    
    tools {nodejs "node-v16.10.0"}
    
    stages {
        
        stage('Prepare') {
            steps {
                echo 'Backend api prepare stage'
                sh 'node -v'
                sh 'npm -v'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Backend api preparing build stage'

                dir('/home/projects/devops-backend-api'){
                    withCredentials([gitUsernamePassword(credentialsId: '93f07d36-e295-45b2-b015-840a32c40ab8')]) {
                       sh 'git stash && git pull origin main'

                       sh 'npm i'
                    }

                    publishChecks name: 'Install dependencies', title: 'Install dependencies', summary: 'Installed successfully',
    text: 'you can publish checks in pipeline script'
                }
            }
            
        }
        
        stage('Deploy') {
            steps {
                echo 'Deployed successfully'
                publishChecks name: 'Deploy code', title: 'Deploy code', summary: 'Installed successfully',
    text: 'you can publish checks in pipeline script'
                // Restart PM 2 app
              
            }
        }
        
    }
}
