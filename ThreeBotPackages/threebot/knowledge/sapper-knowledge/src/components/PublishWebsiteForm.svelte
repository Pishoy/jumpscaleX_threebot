<form>
  <div class="form-group">
    <label for="inputName">Name</label>
    <input
      type="text"
      class="form-control"
      id="inputName"
      aria-describedby="inputName"
      placeholder="Enter website name" />
    <small id="inputName" class="form-text text-muted">Your website name</small>
  </div>

  <div class="form-group">
    <label for="inputGitURL">Git URL</label>
    <input
      type="url"
      class="form-control"
      id="inputGitURL"
      aria-describedby="gitURL"
      placeholder="Enter Git URL" />
    <small id="gitURL" class="form-text text-muted">
      Git URL is the source of your website
    </small>
  </div>

  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="inputIsHugo" />
    <label class="form-check-label" for="inputIsHugo">Is Hugo</label>
  </div>

  <div class="form-group">
    <label for="inputTags">Tags</label>
    <input
      type="text"
      class="form-control"
      id="inputTags"
      aria-describedby="inputTags"
      placeholder="Enter tags" />
    <small id="inputTags" class="form-text text-muted">
      How would you tag your website in the TF Grid?
    </small>
  </div>

  <button type="submit" class="btn btn-primary">Publish website!</button>
</form>
