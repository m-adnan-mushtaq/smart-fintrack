import { pusher } from "@/lib/services";
import { getLoggedUser, returnErrorResponse } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {

    const formData = await request.formData();
    const socket_id = formData.get("socket_id");
    const channel_name = formData.get("channel_name");

    const loggedUser = await getLoggedUser();
    const authResponse = pusher.authorizeChannel(socket_id as string, channel_name as string, {
      user_id: loggedUser.id,
      user_info: loggedUser,
    });
    return NextResponse.json(authResponse);
  } catch (error) {
    return returnErrorResponse(error);
  }
}
