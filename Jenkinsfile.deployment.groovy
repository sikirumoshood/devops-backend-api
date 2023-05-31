pipeline {
    agent any
    
    triggers {
      githubPush()
    }

    stages {

        stage('Deploy') {
            
            when {
              expression {
                // When using single pipenline in Jenkins, the branch name comes with origin/main
                env.GIT_BRANCH == 'origin/main'
              }
            }

            steps {
                    echo 'Deploying code'
                    dir('/home/projects/devops-backend-api'){

                        withCredentials([gitUsernamePassword(credentialsId: '93f07d36-e295-45b2-b015-840a32c40ab8')]) {
                            sh 'git stash && git pull origin main'
                        }

                        publishChecks name: 'Deploy code', title: 'Deploy code', summary: 'Code deployed successfully',
            text: 'you can publish checks in pipeline script'

                }
              
            }
        }
    }
}
