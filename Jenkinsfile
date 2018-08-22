pipeline {
  agent none
  stages {
    stage('Build') {
      parallel {
        stage('Client') {
          agent {
            docker {
              image 'node:latest'
            }

          }
          post {
            always {
              archiveArtifacts 'client/dist/**/*'

            }

          }
          steps {
            dir(path: 'client') {
              nodejs('10.9.0') {
                sh 'npm i'
                script {
                  sh 'npm run build'
                  sh '''docker build -t supermomme/event-management-client:$(echo ${BRANCH_NAME} | sed "s/\\//-/g") .'''
                }

                sh '''withCredentials([usernamePassword(credentialsId: \'docker\', usernameVariable: \'USERNAME\', passwordVariable: \'PASSWORD\')]) {
docker login -u $USERNAME -p $PASSWORD'''
                  sh 'docker push supermomme/event-management-client:$(echo ${BRANCH_NAME} | sed "s/\\//-/g")'
                }

              }

            }
          }
          stage('Api') {
            agent {
              docker {
                image 'node:latest'
              }

            }
            post {
              always {
                step([$class: 'CoberturaPublisher', autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'api/coverage/*.xml', failUnhealthy: false, failUnstable: false, maxNumberOfBuilds: 0, onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false])

              }

            }
            steps {
              dir(path: 'api') {
                nodejs('10.9.0') {
                  sh 'npm i'
                  sh 'npm test'
                  sh 'docker build -t supermomme/event-management-api:$(echo ${BRANCH_NAME} | sed "s/\\//-/g") .'
                  withCredentials(bindings: [usernamePassword(credentialsId: 'docker', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'docker login -u $USERNAME -p $PASSWORD'
                    sh 'docker push supermomme/event-management-api'
                  }

                }

              }

            }
          }
        }
      }
    }
  }