pipeline {
    agent any

    environment {
        app_name = 'skala-devops'

        harbor_url = 'amdp-registry.skala-ai.com'
        harbor_project = 'demo'
        image_tag = "${BUILD_NUMBER}"
        full_image_name = "${harbor_url}/${harbor_project}/${app_name}:${image_tag}"
    }

    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }

        stage('install') {
            steps {
                sh 'npm install'
            }
        }

        stage('test') {
            steps {
                sh 'npm test'
            }
        }

        stage('build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('docker build') {
            steps {
                sh 'docker build -t ${full_image_name} .'
            }
        }

        stage('push to harbor') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'harbor-creds',
                    usernameVariable: 'harbor_user',
                    passwordVariable: 'harbor_pass'
                )]) {
                    sh '''
                    echo "$harbor_pass" | docker login $harbor_url -u "$harbor_user" --password-stdin
                    docker push $full_image_name
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'pipeline success'
        }
        failure {
            echo 'pipeline failed'
        }
    }
}