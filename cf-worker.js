export default {
  async fetch(request, env) {
    return new Response("Backend bypassed. Frontend served by assets.", { status: 404 });
  }
}
