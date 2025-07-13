export interface Database {
    public: {
      Tables: {
        users: {
          Row: {
            id: number
            username: string | null
            role: string | null
            created_at: string | null
            email: string | null
            password_hash: string | null
            is_verified: boolean | null
          }
          Insert: {
            id?: number
            username?: string | null
            role?: string | null
            created_at?: string | null
            email?: string | null
            password_hash?: string | null
            is_verified?: boolean | null
          }
          Update: {
            id?: number
            username?: string | null
            role?: string | null
            created_at?: string | null
            email?: string | null
            password_hash?: string | null
            is_verified?: boolean | null
          }
        }
        projects: {
          Row: {
            id: number
            title: string | null
            requirements: string | null
            bids: number
            status: string | null
            created_at: string | null
            created_by: number | null
            budget_range: string | null
            location: string | null
            timeline: string | null
            images: string | null
          }
          Insert: {
            id?: number
            title?: string | null
            requirements?: string | null
            bids?: number
            status?: string | null
            created_at?: string | null
            created_by?: number | null
            budget_range?: string | null
            location?: string | null
            timeline?: string | null
            images?: string | null
          }
          Update: {
            id?: number
            title?: string | null
            requirements?: string | null
            bids?: number
            status?: string | null
            created_at?: string | null
            created_by?: number | null
            budget_range?: string | null
            location?: string | null
            timeline?: string | null
            images?: string | null
          }
        }
        user_profiles: {
          Row: {
            user_id: number
            email: string | null
            phone: string | null
            bio: string | null
            location: string | null
            profile_image: string | null
            skills: string | null
            experience_years: number | null
            license_number: string | null
            verification_status: string | null
          }
          Insert: {
            user_id: number
            email?: string | null
            phone?: string | null
            bio?: string | null
            location?: string | null
            profile_image?: string | null
            skills?: string | null
            experience_years?: number | null
            license_number?: string | null
            verification_status?: string | null
          }
          Update: {
            user_id?: number
            email?: string | null
            phone?: string | null
            bio?: string | null
            location?: string | null
            profile_image?: string | null
            skills?: string | null
            experience_years?: number | null
            license_number?: string | null
            verification_status?: string | null
          }
        }
        project_requirements: {
          Row: {
            project_id: number
            trade_type: string | null
            description: string | null
            priority: string | null
            estimated_hours: number | null
          }
          Insert: {
            project_id: number
            trade_type?: string | null
            description?: string | null
            priority?: string | null
            estimated_hours?: number | null
          }
          Update: {
            project_id?: number
            trade_type?: string | null
            description?: string | null
            priority?: string | null
            estimated_hours?: number | null
          }
        }
        bids: {
          Row: {
            project_id: number
            tradie_id: number
            trade_type: string | null
            amount: number | null
            timeline: number | null
            proposal_text: string | null
            status: string | null
          }
          Insert: {
            project_id: number
            tradie_id: number
            trade_type?: string | null
            amount?: number | null
            timeline?: number | null
            proposal_text?: string | null
            status?: string | null
          }
          Update: {
            project_id?: number
            tradie_id?: number
            trade_type?: string | null
            amount?: number | null
            timeline?: number | null
            proposal_text?: string | null
            status?: string | null
          }
        }
        project_teams: {
          Row: {
            project_id: number
            team_members: any | null
            total_cost: string | null
            total_timeline: string | null
          }
          Insert: {
            project_id: number
            team_members?: any | null
            total_cost?: string | null
            total_timeline?: string | null
          }
          Update: {
            project_id?: number
            team_members?: any | null
            total_cost?: string | null
            total_timeline?: string | null
          }
        }
      }
    }
  }
  
  export type User = Database['public']['Tables']['users']['Row']
  export type Project = Database['public']['Tables']['projects']['Row']
  export type UserProfile = Database['public']['Tables']['user_profiles']['Row']
  export type ProjectRequirement = Database['public']['Tables']['project_requirements']['Row']
  export type Bid = Database['public']['Tables']['bids']['Row']
  export type ProjectTeam = Database['public']['Tables']['project_teams']['Row']