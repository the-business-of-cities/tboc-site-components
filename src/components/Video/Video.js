import { parseVideoUrl, } from "./parseVideoUrl";
import { Player as ReactVideo, } from "video-react";
import { ReactVideoWrapper, } from "./ReactVideoWrapper";
import { VimeoWrapper, } from "./VimeoWrapper";

import React from "react";
import Vimeo from "react-vimeo";
import YouTube from "react-youtube";

// --------------------------------------------------

// --------------------------------------------------

export const Video = ({ videoUrl, video, }) => {
	const parsedVideoUrl = videoUrl ? parseVideoUrl(videoUrl) : undefined;

	if (videoUrl && parsedVideoUrl) {
		return parsedVideoUrl.platform === "vimeo" ? (
			<VimeoWrapper>
				<Vimeo videoId = { parsedVideoUrl.id } />
			</VimeoWrapper>
		) : (
			<YouTube videoId = { parsedVideoUrl.id } />
		);
	} else {
		return (
			<ReactVideoWrapper>
				<ReactVideo playsInline src = { video } />
			</ReactVideoWrapper>
		);
	}
};
