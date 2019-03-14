import axios from "axios";

const apiClient = axios.create({
    baseURL: `https://api.github.com`
})


export default {
    getGitData(githubname) {
        return apiClient.get(`/users/${githubname}/repos`);
    },

    getCommitActivity(githubname, reponame) {
        return apiClient.get(`/repos/${githubname}/${reponame}/stats/commit_activity`);
    }
}