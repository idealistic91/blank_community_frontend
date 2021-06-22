import { CHANGE_COMMUNITY } from "./community.types";

export const changeCommunity = (communityId, communityName) => {
    return {
        type: CHANGE_COMMUNITY,
        current_community: communityId,
        community_name: communityName
    };

}