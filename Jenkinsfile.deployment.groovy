pipeline {
    agent any
    
    triggers {
      githubPush()
    }

    stages {
        stage('Deploy') {
            echo 'Branch to deploye'

            echo env.BRANCH_NAME
            echo env.GIT_BRANCH
            
            when {
              expression {
                env.BRANCH_NAME == 'main' || env.GIT_BRANCH == 'origin/main'
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
