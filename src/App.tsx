import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Search from './Components/Search';
import { Button } from './Components/defaultComponents';
import Favorites from './Components/Favorites';
import View from './Components/View';

function App() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<[]>([]);
  const [page, setPage] = useState<number>(1);

  const newQuery = (event : any) => {
    setPage(1);
    setQuery(event.target.value);
  }

  const getMore = () => {
    setPage(page + 1)
  }

  const fetchToGitHub = (query : string, page : number) => {
    query && query.length > 2 && fetch(`https://api.github.com/search/repositories?q=${query}&per_page=20&page=${page}`)
    .then(response => response.json())
    .then(obj => obj.items)
    .then((res) => {
      page > 1 
        ? setResults((prevResults : any) => prevResults.concat(res)) 
        : setResults(res)
    })
  }

  useEffect(() => {
    fetchToGitHub(query, page);
  }, [query, page]);


  localStorage.setItem('favorites', 
  `[{"id":1449773,"node_id":"MDEwOlJlcG9zaXRvcnkxNDQ5Nzcz","name":"red","full_name":"red/red","private":false,"owner":{"login":"red","id":4625645,"node_id":"MDEyOk9yZ2FuaXphdGlvbjQ2MjU2NDU=","avatar_url":"https://avatars.githubusercontent.com/u/4625645?v=4","gravatar_id":"","url":"https://api.github.com/users/red","html_url":"https://github.com/red","followers_url":"https://api.github.com/users/red/followers","following_url":"https://api.github.com/users/red/following{/other_user}","gists_url":"https://api.github.com/users/red/gists{/gist_id}","starred_url":"https://api.github.com/users/red/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/red/subscriptions","organizations_url":"https://api.github.com/users/red/orgs","repos_url":"https://api.github.com/users/red/repos","events_url":"https://api.github.com/users/red/events{/privacy}","received_events_url":"https://api.github.com/users/red/received_events","type":"Organization","site_admin":false},"html_url":"https://github.com/red/red","description":"Red is a next-generation programming language strongly inspired by Rebol, but with a broader field of usage thanks to its native-code compiler, from system programming to high-level scripting and cross-platform reactive GUI, while providing modern support for concurrency, all in a zero-install, zero-config, single 1MB file! ","fork":false,"url":"https://api.github.com/repos/red/red","forks_url":"https://api.github.com/repos/red/red/forks","keys_url":"https://api.github.com/repos/red/red/keys{/key_id}","collaborators_url":"https://api.github.com/repos/red/red/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/red/red/teams","hooks_url":"https://api.github.com/repos/red/red/hooks","issue_events_url":"https://api.github.com/repos/red/red/issues/events{/number}","events_url":"https://api.github.com/repos/red/red/events","assignees_url":"https://api.github.com/repos/red/red/assignees{/user}","branches_url":"https://api.github.com/repos/red/red/branches{/branch}","tags_url":"https://api.github.com/repos/red/red/tags","blobs_url":"https://api.github.com/repos/red/red/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/red/red/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/red/red/git/refs{/sha}","trees_url":"https://api.github.com/repos/red/red/git/trees{/sha}","statuses_url":"https://api.github.com/repos/red/red/statuses/{sha}","languages_url":"https://api.github.com/repos/red/red/languages","stargazers_url":"https://api.github.com/repos/red/red/stargazers","contributors_url":"https://api.github.com/repos/red/red/contributors","subscribers_url":"https://api.github.com/repos/red/red/subscribers","subscription_url":"https://api.github.com/repos/red/red/subscription","commits_url":"https://api.github.com/repos/red/red/commits{/sha}","git_commits_url":"https://api.github.com/repos/red/red/git/commits{/sha}","comments_url":"https://api.github.com/repos/red/red/comments{/number}","issue_comment_url":"https://api.github.com/repos/red/red/issues/comments{/number}","contents_url":"https://api.github.com/repos/red/red/contents/{+path}","compare_url":"https://api.github.com/repos/red/red/compare/{base}...{head}","merges_url":"https://api.github.com/repos/red/red/merges","archive_url":"https://api.github.com/repos/red/red/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/red/red/downloads","issues_url":"https://api.github.com/repos/red/red/issues{/number}","pulls_url":"https://api.github.com/repos/red/red/pulls{/number}","milestones_url":"https://api.github.com/repos/red/red/milestones{/number}","notifications_url":"https://api.github.com/repos/red/red/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/red/red/labels{/name}","releases_url":"https://api.github.com/repos/red/red/releases{/id}","deployments_url":"https://api.github.com/repos/red/red/deployments","created_at":"2011-03-07T11:38:19Z","updated_at":"2021-02-14T08:21:43Z","pushed_at":"2021-02-13T21:33:28Z","git_url":"git://github.com/red/red.git","ssh_url":"git@github.com:red/red.git","clone_url":"https://github.com/red/red.git","svn_url":"https://github.com/red/red","homepage":"http://red-lang.org","size":33874,"stargazers_count":4465,"watchers_count":4465,"language":"Red","has_issues":true,"has_projects":false,"has_downloads":true,"has_wiki":true,"has_pages":true,"forks_count":383,"mirror_url":null,"archived":false,"disabled":false,"open_issues_count":490,"license":{"key":"other","name":"Other","spdx_id":"NOASSERTION","url":null,"node_id":"MDc6TGljZW5zZTA="},"forks":383,"open_issues":490,"watchers":4465,"default_branch":"master","score":1},{"id":156018,"node_id":"MDEwOlJlcG9zaXRvcnkxNTYwMTg=","name":"redis","full_name":"redis/redis","private":false,"owner":{"login":"redis","id":1529926,"node_id":"MDEyOk9yZ2FuaXphdGlvbjE1Mjk5MjY=","avatar_url":"https://avatars.githubusercontent.com/u/1529926?v=4","gravatar_id":"","url":"https://api.github.com/users/redis","html_url":"https://github.com/redis","followers_url":"https://api.github.com/users/redis/followers","following_url":"https://api.github.com/users/redis/following{/other_user}","gists_url":"https://api.github.com/users/redis/gists{/gist_id}","starred_url":"https://api.github.com/users/redis/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/redis/subscriptions","organizations_url":"https://api.github.com/users/redis/orgs","repos_url":"https://api.github.com/users/redis/repos","events_url":"https://api.github.com/users/redis/events{/privacy}","received_events_url":"https://api.github.com/users/redis/received_events","type":"Organization","site_admin":false},"html_url":"https://github.com/redis/redis","description":"Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, Streams, HyperLogLogs, Bitmaps.","fork":false,"url":"https://api.github.com/repos/redis/redis","forks_url":"https://api.github.com/repos/redis/redis/forks","keys_url":"https://api.github.com/repos/redis/redis/keys{/key_id}","collaborators_url":"https://api.github.com/repos/redis/redis/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/redis/redis/teams","hooks_url":"https://api.github.com/repos/redis/redis/hooks","issue_events_url":"https://api.github.com/repos/redis/redis/issues/events{/number}","events_url":"https://api.github.com/repos/redis/redis/events","assignees_url":"https://api.github.com/repos/redis/redis/assignees{/user}","branches_url":"https://api.github.com/repos/redis/redis/branches{/branch}","tags_url":"https://api.github.com/repos/redis/redis/tags","blobs_url":"https://api.github.com/repos/redis/redis/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/redis/redis/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/redis/redis/git/refs{/sha}","trees_url":"https://api.github.com/repos/redis/redis/git/trees{/sha}","statuses_url":"https://api.github.com/repos/redis/redis/statuses/{sha}","languages_url":"https://api.github.com/repos/redis/redis/languages","stargazers_url":"https://api.github.com/repos/redis/redis/stargazers","contributors_url":"https://api.github.com/repos/redis/redis/contributors","subscribers_url":"https://api.github.com/repos/redis/redis/subscribers","subscription_url":"https://api.github.com/repos/redis/redis/subscription","commits_url":"https://api.github.com/repos/redis/redis/commits{/sha}","git_commits_url":"https://api.github.com/repos/redis/redis/git/commits{/sha}","comments_url":"https://api.github.com/repos/redis/redis/comments{/number}","issue_comment_url":"https://api.github.com/repos/redis/redis/issues/comments{/number}","contents_url":"https://api.github.com/repos/redis/redis/contents/{+path}","compare_url":"https://api.github.com/repos/redis/redis/compare/{base}...{head}","merges_url":"https://api.github.com/repos/redis/redis/merges","archive_url":"https://api.github.com/repos/redis/redis/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/redis/redis/downloads","issues_url":"https://api.github.com/repos/redis/redis/issues{/number}","pulls_url":"https://api.github.com/repos/redis/redis/pulls{/number}","milestones_url":"https://api.github.com/repos/redis/redis/milestones{/number}","notifications_url":"https://api.github.com/repos/redis/redis/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/redis/redis/labels{/name}","releases_url":"https://api.github.com/repos/redis/redis/releases{/id}","deployments_url":"https://api.github.com/repos/redis/redis/deployments","created_at":"2009-03-21T22:32:25Z","updated_at":"2021-02-15T07:14:54Z","pushed_at":"2021-02-15T07:04:57Z","git_url":"git://github.com/redis/redis.git","ssh_url":"git@github.com:redis/redis.git","clone_url":"https://github.com/redis/redis.git","svn_url":"https://github.com/redis/redis","homepage":"http://redis.io","size":93378,"stargazers_count":47435,"watchers_count":47435,"language":"C","has_issues":true,"has_projects":true,"has_downloads":true,"has_wiki":false,"has_pages":false,"forks_count":18766,"mirror_url":null,"archived":false,"disabled":false,"open_issues_count":2344,"license":{"key":"bsd-3-clause","name":"BSD 3-Clause \"New\" or \"Revised\" License","spdx_id":"BSD-3-Clause","url":"https://api.github.com/licenses/bsd-3-clause","node_id":"MDc6TGljZW5zZTU="},"forks":18766,"open_issues":2344,"watchers":47435,"default_branch":"unstable","score":1}]`
     );

  return (
    <Router>
      <Link to="/search"><Button>Search</Button></Link>
      <Link to="/favorites"><Button>Favorites</Button></Link>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        <Switch>
            <Route path="/search">
              <Search newQuery={newQuery} query={query} getMore={getMore} results={results}/>
            </Route>

            <Route path="/view">
              <View />
            </Route>

            <Route path="/favorites">
              <Favorites favorites={
                localStorage.getItem('favorites')
              } />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
