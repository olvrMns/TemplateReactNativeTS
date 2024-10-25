import { Component, ReactNode } from "react";
import { UserInformation } from "../interfaces/userInformation.interface";

export interface ProfileScreenProperties {
    userInformtion: UserInformation;
}

export interface ProfileScreenState {

}



export class ProfileScreen extends Component<ProfileScreenProperties, ProfileScreenState, any> {
    constructor(properties: ProfileScreenProperties) {
        super(properties);
        this.state = {
            
        }
    }

    render(): ReactNode {
        return(
            <>

            </>
        )
    }
}