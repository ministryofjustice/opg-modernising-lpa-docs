module.exports = function () {
  const options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  var md = require("markdown-it")(options);
  var defaultRender = function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrPush(["class", "govuk-table"]);
    return defaultRender(tokens, idx, options, env, self);
  };

  md.renderer.rules.thead_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrPush(["class", "govuk-table__head"]);
    return defaultRender(tokens, idx, options, env, self);
  };

  md.renderer.rules.tbody_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrPush(["class", "govuk-table__body"]);
    return defaultRender(tokens, idx, options, env, self);
  };

  md.renderer.rules.th_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrPush(["class", "govuk-table__header"]);
    return defaultRender(tokens, idx, options, env, self);
  };

  md.renderer.rules.tr_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrPush(["class", "govuk-table__row"]);
    return defaultRender(tokens, idx, options, env, self);
  };

  md.renderer.rules.td_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrPush(["class", "govuk-table__cell"]);
    return defaultRender(tokens, idx, options, env, self);
  };

  md.renderer.rules.paragraph_open = function (
    tokens,
    idx,
    options,
    env,
    self
  ) {
    tokens[idx].attrPush(["class", "govuk-body"]);
    return defaultRender(tokens, idx, options, env, self);
  };
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrPush(["class", "govuk-link"]);
    if (tokens[idx].attrGet("href").indexOf("http") === 0) {
      tokens[idx].attrPush(["target", "_blank"]);
    }
    return defaultRender(tokens, idx, options, env, self);
  };
  md.renderer.rules.bullet_list_open = function (
    tokens,
    idx,
    options,
    env,
    self
  ) {
    tokens[idx].attrPush(["class", "govuk-list govuk-list--bullet"]);
    return defaultRender(tokens, idx, options, env, self);
  };
  md.renderer.rules.ordered_list_open = function (
    tokens,
    idx,
    options,
    env,
    self
  ) {
    tokens[idx].attrPush(["class", "govuk-list govuk-list--number"]);
    return defaultRender(tokens, idx, options, env, self);
  };
  md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
    let token = tokens[idx];
    let className;
    switch (token.tag) {
      case "h1":
        className = "govuk-heading-xl";
        break;
      case "h2":
        className = "govuk-heading-l";
        break;
      case "h3":
        className = "govuk-heading-m";
        break;
      case "h4":
        className = "govuk-heading-s";
        break;
    }
    if (className) {
      tokens[idx].attrPush(["class", className]);
    }
    return defaultRender(tokens, idx, options, env, self);
  };
  md.renderer.rules.blockquote_open = function (
    tokens,
    idx,
    options,
    env,
    self
  ) {
    tokens[idx].attrPush(["class", "govuk-inset-text"]);
    return defaultRender(tokens, idx, options, env, self);
  };

  return md;
};
