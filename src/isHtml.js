const isHtml = body => {
  return /<\/?[a-z][\s\S]*>/i.test(body);
};

export default isHtml;