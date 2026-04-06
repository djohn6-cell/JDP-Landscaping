import { createRequire } from "module";
const require = createRequire(import.meta.url);

const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
// ffprobe ships alongside ffmpeg-installer
ffmpeg.setFfprobePath(ffmpegInstaller.path.replace("ffmpeg", "ffprobe"));

const input = "public/videos/showcase.mp4";
const output = "public/videos/showcase-compressed.mp4";

// Probe first to show what we're working with
ffmpeg.ffprobe(input, (err, meta) => {
  if (err) {
    // ffprobe not bundled — skip probe, go straight to encode
    encode();
    return;
  }
  const v = meta.streams.find((s) => s.codec_type === "video");
  console.log(`Source: ${Math.round(meta.format.duration)}s · ${v?.width}x${v?.height} · ${Math.round(meta.format.bit_rate / 1000)} kbps`);
  encode();
});

function encode() {
  console.log("Encoding at 720p, CRF 35, target ~15MB...");

  ffmpeg(input)
    .videoCodec("libx264")
    .addOption("-crf", "35")
    .addOption("-preset", "fast")
    .addOption("-vf", "scale=1280:-2")
    .addOption("-movflags", "+faststart")   // enables streaming playback before full download
    .audioCodec("aac")
    .audioBitrate("64k")
    .on("progress", (p) => {
      if (p.percent) process.stdout.write(`\r  Progress: ${Math.round(p.percent)}%   `);
    })
    .on("end", () => {
      console.log("\n✓ Done — saved to", output);
    })
    .on("error", (err) => {
      console.error("\n✗ Error:", err.message);
      process.exit(1);
    })
    .save(output);
}
