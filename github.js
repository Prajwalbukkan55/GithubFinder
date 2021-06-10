class Github {
    constructor(){
        this.client_id = '4179cdb92ed2411ee3c9';
        this.client_secret = '838cf7785a44c69183b95b5b4f8c7c2aed63cf96';
        this.repos_count   = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await  fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const reposResponse = await  fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
} 