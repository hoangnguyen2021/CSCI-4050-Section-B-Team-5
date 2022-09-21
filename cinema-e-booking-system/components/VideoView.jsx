const VideoView = () => {
  return (
    <video class="w-full" controls>
      <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoView;
