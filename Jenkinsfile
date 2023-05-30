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

                publishChecks name: 'Build', title: 'Pipeline Check', summary: 'check through pipeline',
    text: 'you can publish checks in pipeline script',
    detailsURL: 'https://github.com/jenkinsci/checks-api-plugin#pipeline-usage',
    actions: [[label:'an-user-request-action', description:'actions allow users to request pre-defined behaviours', identifier:'an unique identifier']]

                dir('/home/projects/devops-backend-api'){
                    withCredentials([gitUsernamePassword(credentialsId: '93f07d36-e295-45b2-b015-840a32c40ab8')]) {
                       sh 'git stash && git pull origin main'
                       sh 'npm i'
                    }
                }
            }
            
        }
        
        stage('Deploy') {
            steps {
                echo 'Deployed successfully'
                
                // Restart PM 2 app
              
            }
        }
        
    }
}
