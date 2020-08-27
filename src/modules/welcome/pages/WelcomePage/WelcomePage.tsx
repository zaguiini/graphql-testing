import React, { FunctionComponent } from 'react'
import { Link, Typography, Container } from '@toptal/picasso'
import { List } from '@toptal/picasso-lab'

import packageJson from '../../../../../package.json'
import { DefaultPage } from '../../../core'
import * as S from './styles'

export interface Props {}

const getPurePackageName = (name: string) => name.replace('@toptal/', '')

const WelcomePage: FunctionComponent<Props> = () => {
  const purePackageName = getPurePackageName(packageJson.name)

  return (
    <DefaultPage title={packageJson.name}>
      <Container bottom='large'>
        <img src='https://media.giphy.com/media/Ln2dAW9oycjgmTpjX9/giphy.gif' width='480' height='242' />
      </Container>

      <Typography variant='heading' size='xlarge' as='div'>
        Welcome to {packageJson.name} project
      </Typography>
      <Container top='small'>
        <Typography>{packageJson.description}</Typography>
      </Container>

      <Container top='medium'>
        <Typography variant='heading' size='xlarge' as='div'>What's next?</Typography>

        <Container top='small'>
          <Typography variant='heading' size='large'>Create a repository</Typography>

          <Container top='small'>
            In GitHub create a new repository <Link href={`https://github.com/toptal/${packageJson.name}`}>https://github.com/toptal/{purePackageName}</Link>.
          </Container>

          <Container top='small'>
            Configure access to the repo:

            <Container top='small'>
              <List variant='unordered'>
                <List.Item>Add your team as <Typography weight='semibold' as='span'>Admin</Typography> members of this repo</List.Item>
                <List.Item>Add <Link href='https://github.com/orgs/toptal/teams/infrastructure-eng'>infrastructure-eng</Link> as <Typography weight='semibold' as='span'>Admin</Typography> members of this repo</List.Item>
                <List.Item>Add <Link href='https://github.com/toptal-bot'>toptal-bot</Link> as <Typography weight='semibold' as='span'>Admin</Typography> member of this repo (needed to create new releases in GitHub)</List.Item>
                <List.Item>Add <Link href='https://github.com/toptal-build'>toptal-build</Link> as <Typography weight='semibold' as='span'>Admin</Typography> member of this repo (needed to have access to the repo from the CI)</List.Item>
                <List.Item>Add <Link href='https://github.com/toptal-devbot'>toptal-devbot</Link> as <Typography weight='semibold' as='span'>Admin</Typography> member of this repo (needed to leave messages to the PR, like danger checks, temploy link)</List.Item>
              </List>
            </Container>
          </Container>

          <Container top='small'>
            Push your code to the repo:

            <Container top='small'>
              <S.Code>
                cd ./{purePackageName} <br />
                git init <br />
                git add . <br />
                git commit -m "First commit" <br />
                git remote add origin git@github.com:toptal/{purePackageName}.git <br />
                git push -u origin master <br />
              </S.Code>
            </Container>
          </Container>
        </Container>

        <Container top='small'>
          <Typography variant='heading' size='large'>Prepare CI</Typography>
          <Container top='small'>
            To create jobs on Jenkins you need to run <Link href='https://jenkins-build.toptal.net/job/davinci/job/davinci-ci-job-creator'>davinci-ci-job-creator job</Link>.
          </Container>

          <Container top='small'>
            Steps:

            <Container top='small'>
              <List>
                <List.Item>Click on 'Build with Parameters'</List.Item>
                <List.Item>Set 'PROJECT_NAME' parameter to <Typography weight='semibold' as='span'>{purePackageName}</Typography></List.Item>
                <List.Item>Click 'Build'</List.Item>
                <List.Item>Go to <Link href={`https://jenkins-build.toptal.net/job/${purePackageName}/`}>Jenkins</Link> to check your jobs</List.Item>
              </List>
            </Container>
          </Container>
        </Container>

        <Container top='small'>
          <Typography variant='heading' size='large'>Create a PR</Typography>
          <Container top='small'>
            Create a new PR to check how the new jobs are working.
            The job <Link href={`https://jenkins-build.toptal.net/job/${purePackageName}/job/${purePackageName}-pr-tests`}>
              {purePackageName}-pr-tests
            </Link> should be triggered automatically after the PR is created.
          </Container>

          <Container top='small'>
            And <Link href={`https://jenkins-build.toptal.net/job/${purePackageName}/job/${purePackageName}-master-main`}>
              {purePackageName}-master-main
            </Link> job will be triggered as soon as PR will be merged to master.
          </Container>
        </Container>

        <Container top='small' bottom='large'>
          <Typography variant='heading' size='large'>Check Picasso docs</Typography>

          <Container top='small'>
            Toptal uses the company component library - <Link href='https://picasso.toptal.net'>Picasso</Link>.
            Check the docs and start creating!
          </Container>
        </Container>
      </Container>
    </DefaultPage>
  )
}

WelcomePage.defaultProps = {}

WelcomePage.displayName = 'WelcomePage'

export default WelcomePage
