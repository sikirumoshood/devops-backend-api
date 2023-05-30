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
                echo 'Checking out code'
                dir('/devops-backend-api'){
                    sh 'ls'
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
