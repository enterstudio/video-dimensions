# video-dimensions

**A simple command line tool to find the width and height a video**

## Install

```sh
npm install -g get-video-dimensions-cli
```

This tool requires `ffprobe` to do the hard work, which is part of `ffmpeg`

You could:

```sh
brew install ffmpeg
```

but you can replace `brew` with your package manager of choice.

## Usage

```sh
video-dimensions foo.mp4
{"name":"foo.mp4","width":690,"height":420}
```

Output is json to make downstream parsing easier, for something like [`JSONstream`](https://github.com/dominictarr/JSONStream)

**Find all the dimensions of videos in a directory**

```
find . -name "*.mp4" -exec video-dimensions {} \;
```
`find` is ace. The above will find all the files with the `.mp4` extension in the current directory `.`, and run video-dimensions on each one.

`{}` is a placeholder for a single filename, and the `\;` is used to tell `-exec` that that's the end of the command.

## Credits

- [`ffmpeg`](https://www.ffmpeg.org/) digs the info out of the videos and provides `ffprobe`
- [`get-video-dimensions`](https://github.com/mgmtio/get-video-dimensions) - talks to `ffprobe` from node.


---

A [(╯°□°）╯︵TABLEFLIP](https://tableflip.io) side project.