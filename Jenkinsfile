pipeline {
    agent any

    stages {
      

                stage('SonarQube analysis') {
            environment {
                scannerHome = tool 'SonarQube Scanner' // The name you have given the Sonar Scanner in Global Tool Configuration
            }
            steps {
                withCredentials([string(credentialsId: 'Jenkins_Sonarqube', variable: 'SONARQUBE_TOKEN')])
            {
                    withSonarQubeEnv('SonarQube Scanner') { // Ensure 'SonarQube' matches your SonarQube server setup
                        sh """
                        ${scannerHome}/bin/sonar-scanner -X \
                        -Dsonar.token=$SONARQUBE_TOKEN \
                        -D sonar.projectBaseDir=/var/lib/jenkins/workspace/$JOB_NAME/ \
                        -Dsonar.projectKey=zivux-website \
                        -Dsonar.sourceEncoding=UTF-8 \
                        -Dsonar.host.url=http://sonarqube.proeffico.com/ \
                        -Dsonar.exclusions="**/modules/**,**/libraries/**"
                        """
                    }
                }
            }
        }


        stage("Quality Gate") {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Changing Ownership to Jenkins User') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(
                    configName: 'OPS360',
                    transfers: [sshTransfer(
                        cleanRemote: false,
                        excludes: '',
                        execCommand: 'sudo chown -R jenkins:jenkins /var/www/html/zivux-node-website',
                        execTimeout: 120000,
                        flatten: false,
                        makeEmptyDirs: false,
                        noDefaultExcludes: false,
                        patternSeparator: '[, ]+',
                        remoteDirectory: '',
                        remoteDirectorySDF: false,
                        removePrefix: '',
                        sourceFiles: ''
                    )],
                    usePromotionTimestamp: false,
                    useWorkspaceInPromotion: false,
                    verbose: true // Set verbose to true for debugging
                )])
            }
        }

        stage('Deploying') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(
                    configName: 'OPS360',
                    transfers: [sshTransfer(
                        cleanRemote: false,
                        excludes: '',
                        execCommand: 'cd /var/www/html/zivux-node-website/ && sudo bash deploy.sh',
                        execTimeout: 120000,
                        flatten: false,
                        makeEmptyDirs: false,
                        noDefaultExcludes: false,
                        patternSeparator: '[, ]+',
                        remoteDirectory: '/var/www/html/zivux-node-website',
                        remoteDirectorySDF: false,
                        removePrefix: '',
                        sourceFiles: ''
                    )],
                    usePromotionTimestamp: false,
                    useWorkspaceInPromotion: false,
                    verbose: true // Set verbose to true for debugging
                )])
            }
        }
    }


    post {
        always {
            sshPublisher(publishers: [sshPublisherDesc(
                        configName: 'OPS360',
                        transfers: [sshTransfer(
                            cleanRemote: false,
                            excludes: '',
                            execCommand: 'sudo chown -R www-data:www-data /var/www/html/zivux-node-website',
                            execTimeout: 120000,
                            flatten: false,
                            makeEmptyDirs: false,
                            noDefaultExcludes: false,
                            patternSeparator: '[, ]+',
                            remoteDirectory: '',
                            remoteDirectorySDF: false,
                            removePrefix: '',
                            sourceFiles: ''
                        )],
                        usePromotionTimestamp: false,
                        useWorkspaceInPromotion: false,
                        verbose: true // Set verbose to true for debugging
                    )])
               // Delete workspace when build is done
            cleanWs(
                patterns: [[
                    pattern: 'dependency-check-report.xml',
                    exclude: true
                ]]
            ) // Jenkins Built-in-Feature for deleting the workspace and Cleaning env.
        }
    }
}
